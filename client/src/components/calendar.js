// import { render } from 'react-dom'
import { ResponsiveCalendar } from '@nivo/calendar'
import React from 'react'
import calendarSeed from "../components/calendarDB"


// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.

class Calendar extends React.Component{

render() {

    return(
        <ResponsiveCalendar
        data={calendarSeed}
        from="2015-03-01"
        to="2016-07-12"
        emptyColor="#eeeeee"
        colors={[
            "#61cdbb",
            "#97e3d5",
            "#e8c1a0",
            "#f47560"
        ]}
        margin={{
            "top": 100,
            "right": 30,
            "bottom": 60,
            "left": 30
        }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        monthLegendOffset={10}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                "anchor": "bottom-right",
                "direction": "row",
                "translateY": 36,
                "itemCount": 4,
                "itemWidth": 34,
                "itemHeight": 36,
                "itemDirection": "top-to-bottom"
            }
        ]}
    />
    )
}
    
}

 export default Calendar;
