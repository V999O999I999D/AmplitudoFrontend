@extends('layouts.app')

@section('tree_view')

        <div class="tree">
            @php

            function type($current){
                $current_descendents = \App\Models\Folder::find($current->id)->descendents();
                if(count($current_descendents))
                    return '<span class="btn btn-warning"><i class="fas fa-minus"></i>&nbsp&nbsp'. $current->name. "</span>";
                else if($current->is_folder)
                    return '<span class="btn btn-danger"><i class="far fa-times-circle"></i>&nbsp&nbsp'. $current->name. "</span>";
                return '<span class="btn btn-success"><i class="fas fa-leaf"></i>&nbsp&nbsp'. $current->name. "</span>";
            }

            echo '<ul>';
                for($j = 0; $j < count($roots); $j++){

                    $descendents = \App\Models\Folder::find($roots[$j]->id)->descendents();

                    echo '<li>';
                    echo '<span class="btn btn-primary"><i class="fas fa-folder"></i>&nbsp&nbsp'. $roots[$j]->name. "</span>";
                    echo '&nbsp&nbsp<a href="#"><i class="fas fa-plus"></i></a>';
                    if(count($descendents)){
                        echo '<ul>';
                        for($i = 0; $i < count($descendents); $i++){

                            echo '<li>';
                            echo type($descendents[$i]);
                            echo '&nbsp&nbsp<a href="#"><i class="fas fa-plus"></i></a>';

                            if(count($descendents[$i]->descendents()))
                                echo '<ul>';

                            // Ako je leaf
                            if(!count($descendents[$i]->descendents())){
                                echo '</li>';

                                // Zatvaramo zagrade sve do parent-a sledeceg descendent-a
                                $curr_id = $descendents[$i]->parent_id;

                                while($i !== count($descendents)-1 && $curr_id !== $descendents[$i+1]->parent_id){
                                    echo '</ul></li>';
                                    $curr_id = \App\Models\Folder::where('id', $curr_id)->get()->first()->parent_id;
                                }
                            }

                        }
                        echo '</ul>';
                        echo '</li>';
                    }
                    else
                        echo '</li>';
                }

        @endphp
        </div>

@endsection
