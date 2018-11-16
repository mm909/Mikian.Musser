// let currentHover = "";
// let interactables = [];
// $(document).ready(function() {
//   interactables = $("#mainContent").find(".interact")
//   for (var i = 0; i < interactables.length; i++) {
//     interactables[i].elementType = $(interactables[i]).children()[0].localName;
//     $(interactables[i]).hover(function() {
//         console.log(this.elementType);
//         let t = $(this.elementType).css("font-size")
//         console.log(t);
//         $(this).css("fontSize", t)
//         currentHover = $(this).html();
//         $(this).html($(this).html().replace(/</g, "&lt;"))
//       },
//       function() {
//         let temp = $(this).html()
//         temp = (temp.replace(/&lt;/g, "<"))
//         temp = (temp.replace(/&gt;/g, ">"))
//         $(this).html(temp)
//       })
//   }
// });