// import { render } from 'react-dom'
import { ResponsiveCalendar } from '@nivo/calendar'
import React from 'react'
import axios from 'axios';
import calendarSeed from "../components/calendarDB"


// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.

class Calendar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            days: []
        };
    }

    loadDays = () => {
        axios.get("/api/day/findAll")
            .then((response) => {
                // console.log(typeof response.data[0].value)
                this.setState({ days: response.data })
            })
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.loadDays();
    }

    render() {

        let days = [
            {
                "day": "2018-05-22",
                "value": 80
            },
            {
                "day": "2018-07-22",
                "value": 90
            }
        ]

        return (
            <ResponsiveCalendar
                data={calendarSeed}
                from="2016-01-01"
                to="2016-012-31"
                emptyColor="#eeeeee"
                colors={[
                    "#61cdbb",
                    "#97e3d5",
                    "#e8c1a0",
                    "#f47560"
                ]}
                // margin={{
                //     "top": 100,
                //     "right": 30,
                //     "bottom": 60,
                //     "left": 30
                // }}
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
