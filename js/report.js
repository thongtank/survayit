$(function() {
    var sharePiePolorDoughnutData = [{
            value: 120,
            color: "#455C73",
            highlight: "#34495E",
            label: "Dark Grey"
        }, {
            value: 50,
            color: "#9B59B6",
            highlight: "#B370CF",
            label: "Purple Color"
        }, {
            value: 150,
            color: "#BDC3C7",
            highlight: "#CFD4D8",
            label: "Gray Color"
        }, {
            value: 180,
            color: "#26B99A",
            highlight: "#36CAAB",
            label: "Green Color"
        }, {
            value: 100,
            color: "#3498DB",
            highlight: "#49A9EA",
            label: "Blue Color"
        }

    ];
    var $ctx = $('#pie_report').get(0).getContext('2d');
    var myPie = new Chart($ctx).Pie(sharePiePolorDoughnutData, {
        responsive: true,
        tooltipFillColor: "rgba(51, 51, 51, 0.55)"
    });

    // myPie.addData({
    //     value: 199,
    //     color: "#B48EAD",
    //     highlight: "#C69CBE",
    //     label: "Purple 6666"
    // });
    
    $ctx.onclick = function(evt) {
        var activePoints = myPie.getSegmentsAtEvent(evt);
        // => activePoints is an array of segments on the canvas that are at the same position as the click event.
    };

});
