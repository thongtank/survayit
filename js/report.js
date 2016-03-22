$(function() {
    // var sharePiePolorDoughnutData = [{
    //         value: 120,
    //         color: "#455C73",
    //         highlight: "#34495E",
    //         label: "Dark Grey"
    //     }, {
    //         value: 50,
    //         color: "#9B59B6",
    //         highlight: "#B370CF",
    //         label: "Purple Color"
    //     }, {
    //         value: 150,
    //         color: "#BDC3C7",
    //         highlight: "#CFD4D8",
    //         label: "Gray Color"
    //     }, {
    //         value: 180,
    //         color: "#26B99A",
    //         highlight: "#36CAAB",
    //         label: "Green Color"
    //     }, {
    //         value: 100,
    //         color: "#3498DB",
    //         highlight: "#49A9EA",
    //         label: "Blue Color"
    //     }
    // ];
    $.ajax({
            url: '../php/report.inc.php',
            type: 'POST',
            data: {
                whatTheReport: '1'
            },
        })
        .done(function(res) {
            // console.log(res);
            var pieWorkingOrStudyingData = jQuery.parseJSON(res);
            var $ctx = [];
            $ctx = $('canvas#pie_report').get();
            var myPie = new Chart($ctx[0].getContext('2d')).Pie(pieWorkingOrStudyingData, {
                responsive: true,
                tooltipFillColor: "rgba(51, 51, 51, 0.55)"
            });
            var myDoughnut = new Chart($ctx[1].getContext('2d')).Doughnut(pieWorkingOrStudyingData, {
                responsive: true,
                tooltipFillColor: "rgba(51, 51, 51, 0.55)"
            });
            // $ctx.onclick = function(evt) {
            //     var activePoints = myPie.getSegmentsAtEvent(evt);
            //     // => activePoints is an array of segments on the canvas that are at the same position as the click event.
            // };
        });
});
