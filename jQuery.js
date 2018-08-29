$( document ).ready(function() {


      for(var i = 0; i < programs.length; i++){
        /* Create a new line for a code example */
        $codeline = $( "<div class='code-line' id='code-line" + i + "' ></div>" )
        $( ".code-container" ).append($codeline);
        //--
            /* Create the image */
            $exampleImage =
            $( "<img class='example-image' id='example-image" +
            i
            + "' src=" + programs[i].imgpath + "></img>" )
            $( "#code-line" + i).append($exampleImage);

            /* Create the code-Description container */
            $codeDescription = $( "<div class='code-Description' id='code-Description" + i + "' ></div>" )
            $( "#code-line" + i ).append($codeDescription);
            //--

                /* Create the code-title container */
                $titleContainer = $( "<div class='title' id='title-container" + i + "' ></div>" )
                $( "#code-Description" + i ).append($titleContainer);
                //--

                    /* Create the code-title and link to file path */
                    $title = $( "<a href=" + programs[i].filepath + " id='title" + i + "' >" + programs[i].title + "</a>" )
                    $( "#title-container" + i ).append($title);

                    /* Create the tags container */
                    $tagsContainer = $( "<div class='Tags' id='Tags" + i + "' ></div>" )
                    $( "#title-container" + i  ).append($tagsContainer);
                    //--

                        for(var j = 0; j < programs[i].tags.length; j++){
                          /* Create the tag */
                          $tagContainer = $( "<div class='tag' id='tag" + i + j + "' ></div>" )
                          $( "#Tags" + i  ).append($tagContainer);

                              /* Create the tag */
                              $tag = $( "<p class='" + "tag-" + programs[i].tags[j] + "'>" + programs[i].tags[j] + "</p>" )
                              $( "#tag" + i + j  ).append($tag);
                        }

                /* Create the tag */
                $tagContainer = $( "<div class='short-Description' id='short-Description" + i + "' ></div>" )
                $( "#code-Description" + i  ).append($tagContainer);

                    /* Create the tag */
                    $tagContainer = $( "<p>" + programs[i].shortDescription + "</p>" )
                    $( "#code-Description" + i  ).append($tagContainer);
      }

});
