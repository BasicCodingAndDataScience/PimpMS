var myConfigColumnChart = {
    "graphset": [
        {
            "type": "bar",
            "background-color": "white",
            "title": {
                "text": "Tech Giant Quarterly Revenue",
                "font-color": "#7E7E7E",
                "backgroundColor": "none",
                "font-size": "22px",
                "alpha": 1,
                "adjust-layout":true,
            },
            "plotarea": {
                "margin": "dynamic"
            },
            "legend": {
                "layout": "x3",
                "overflow": "page",
                "alpha": 0.05,
                "shadow": false,
                "align":"center",
                "adjust-layout":true,
                "marker": {
                    "type": "circle",
                    "border-color": "none",
                    "size": "10px"
                },
                "border-width": 0,
                "maxItems": 3,
                "toggle-action": "hide",
                "pageOn": {
                    "backgroundColor": "#000",
                    "size": "10px",
                    "alpha": 0.65
                },
                "pageOff": {
                    "backgroundColor": "#7E7E7E",
                    "size": "10px",
                    "alpha": 0.65
                },
                "pageStatus": {
                    "color": "black"
                }
            },
            "plot": {
                "bars-space-left":0.15,
                "bars-space-right":0.15,
                "animation": {
                    "effect": "ANIMATION_SLIDE_BOTTOM",
                    "sequence": 0,
                    "speed": 800,
                    "delay": 800
                }
            },
            "scale-y": {
                "line-color": "#7E7E7E",
                "item": {
                    "font-color": "#7e7e7e"
                },
                "values": "0:60:10",
                "guide": {
                    "visible": true
                },
                "label": {
                  "text": "$ Billions",
                  "font-family": "arial",
                  "bold": true,
                  "font-size": "14px",
                  "font-color": "#7E7E7E",
                },
            },
            "scaleX":{
                "values": [
                    "Q3",
                    "Q4",
                    "Q1",
                    "Q2"
                ],
                "placement":"default",
                "tick":{
                    "size":58,
                    "placement":"cross"
                },
                "itemsOverlap":true,
                "item":{
                    "offsetY":-55
                }
            },
            "scaleX2":{
                "values":["2013","2014"],
                "placement":"default",
                "tick":{
                    "size":20,
                },
                "item":{
                    "offsetY":-15
                }
            },
            "tooltip": {
              "visible": false
            },
            "crosshair-x":{
                "line-width":"100%",
                "alpha":0.18,
                "plot-label":{
                  "header-text":"%kv Sales"
                }
            },
            "series": [
                {
                    "values": [
                        37.47,
                        57.59,
                        45.65,
                        37.43
                    ],
                    "alpha": 0.95,
                    "borderRadiusTopLeft": 7,
                    "background-color": "#8993c7",
                    "text": "Apple",
                },
                {
                    "values": [
                        2.02,
                        2.59,
                        2.5,
                        2.91
                    ],
                    "borderRadiusTopLeft": 7,
                    "alpha": 0.95,
                    "background-color": "#fdb462",
                    "text": "Facebook"
                },
                {
                    "values": [
                        13.4,
                        14.11,
                        14.89,
                        16.86
                    ],
                    "alpha": 0.95,
                    "borderRadiusTopLeft": 7,
                    "background-color": "#8dd3c7",
                    "text": "Google"
                },
                {
                    "values": [
                        18.53,
                        24.52,
                        20.4,
                        23.38
                    ],
                    "borderRadiusTopLeft": 7,
                    "alpha": 0.95,
                    "background-color": "#fb8072",
                    "text": "Microsoft"
                },
                {
                    "values": [
                        17.09,
                        25.59,
                        19.74,
                        19.34
                    ],
                    "borderRadiusTopLeft": 7,
                    "alpha": 0.95,
                    "background-color": "#80b1d3",
                    "text": "Amazon"
                },
                {
                    "values": [
                        2.31,
                        2.36,
                        2.42,
                        2.52
                    ],
                    "borderRadiusTopLeft": 7,
                    "alpha": 0.95,
                    "background-color": "#b3de69",
                    "text": "Cognizant"
                }
            ]
        }
    ]
};

zingchart.render({
	id : 'columnChart',
	data : myConfigColumnChart,
	height: '100%',
	width: '100%'
});
