import React from 'react'
import Calendar from 'react-calendar'
import SelectedDate from './SelectedDate';
// import EventCalendar from 'react-event-calendar';

class Home extends React.Component{
    constructor(){
        super();
        this.state={
            inputDate:'',
            date: '',
            user_id:0,
            event_start:'',
            event_end:'',
            event_detail:'',
            event_type:'',
            img:'',
            create: false
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
        this.props.history.push('/date')
    }


    dayClick = (e) => {
        this.setState({
            date: e
        })
    }

    toggleCreate = () => {
        this.setState({create:!this.state.create})
    }

    render(props){
        return(
            <div>
                Home
                <br/>
                <input
                type='date'
                name='inputDate'
                onInput={(e) => this.handleInput(e)}
                />
                <br/>
                {this.state.inputDate}
                
                <Calendar
                onClickDay = {e=>this.dayClick(e)}
                />
                {this.state.date}

                <button onClick={this.toggleCreate}>create</button>
                {!this.state.create
                ?<input/>
                :console.log('hi')}
            </div>
        )
    }
}

export default Home;