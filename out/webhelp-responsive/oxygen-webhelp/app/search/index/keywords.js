define(function() {var keywords=[{w:"Greek",p:["p0"]},{w:"Cuisine",p:["p0","p1","p2","p3","p4"]},{w:"Spanish",p:["p1"]},{w:"What",p:["p2"]},{w:"is",p:["p2"]},{w:"a",p:["p2"]},{w:"Mediterranean",p:["p2","p4"]},{w:"Style?",p:["p2"]},{w:"Names",p:["p3"]},{w:"Countries",p:["p4"]},{w:"with",p:["p4"]},{w:"Making",p:["p5","p6","p7","p8"]},{w:"Gazpacho",p:["p5"]},{w:"Moussaka",p:["p6"]},{w:"Paella",p:["p7"]},{w:"Tzatziki",p:["p8"]}];
var ph={};
ph["p0"]=[0, 1];
ph["p1"]=[2, 1];
ph["p2"]=[3, 4, 5, 6, 1, 7];
ph["p3"]=[1, 8];
ph["p4"]=[9, 10, 6, 1];
ph["p5"]=[11, 12];
ph["p6"]=[11, 13];
ph["p7"]=[11, 14];
ph["p8"]=[11, 15];
     return {
         keywords: keywords,
         ph: ph
     }
});
