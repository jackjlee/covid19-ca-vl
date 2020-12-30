var covid_cases = {
  data: { url: 'https://raw.githubusercontent.com/datadesk/california-coronavirus-data/master/latimes-county-totals.csv'},
  mark: 'line',
  transform: [{
    filter: {
        field: "county",
        oneOf: ["Alameda",
                "Contra Costa",
                "Marin",
                "Monterey",
                "Napa",
                "San Francisco",
                "San Mateo",
                "Santa Clara",
                "Santa Cruz",
                "Solano",
                "Sonoma"]
    }
  }],
  encoding: {
    x: { field: "date", type: "temporal" },
    y: { field: "confirmed_cases", type: "quantitative" },
    color: { field: "county", type: "nominal" },
    tooltip: [
      { field: "date", type: "temporal", title: "Date" },
      { field: "county", type: "nominal", title: "County" },
      { field: "confirmed_cases", type: "quantitative", title: 'Cases' }
    ]
  }
};

vegaEmbed('#covid-cases', covid_cases);
