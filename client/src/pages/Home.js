import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getExerciseInfo } from '../utils/api'
import { getExerciseEquipment } from '../utils/api'
import { getExerciseImage } from '../utils/api'
import { getExerciseMuscle } from '../utils/api'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Jumbotron from '../pages/jumbotron'


class Home extends Component {

  state = {
    activeTab: "workouts",
    workouts: [],
    equipment: [],
    muscles: [],
    image: []
  }

  componentDidMount() {
    this.props.handleBackgroundChange('home');
  }

  handleGetWorkouts = () => {
    getExerciseInfo().then(res => {
      this.setState({ workouts: res.data.results, activeTab: 'workouts' })
    })
  }
  getExerciseEquipment = () => {
    getExerciseEquipment().then(res => {
      this.setState({ equipment: res.data.results, activeTab: 'equipment' })
    })
  }
  getExerciseMuscle = () => {
    getExerciseMuscle().then(res => {
      this.setState({ muscles: res.data.results, activeTab: 'muscles' })
    })
  }
  getExerciseImage = () => {
    getExerciseImage().then(res => {
      this.setState({ image: res.data.results, activeTab: 'images' })
    })
  }




  render() {

    console.log(this.state);

    return (



      <div>
        <Jumbotron />
        <h1>Exercise Info</h1>
        <div>
          <button className="btn btn-primary" onClick={this.handleGetWorkouts}>Get Workouts</button>
        </div>

        <div>
          <button className="btn btn-primary" onClick={this.getExerciseEquipment}>Get Workout Equipment</button>

        </div>

        <div>        <button className="btn btn-primary" onClick={this.getExerciseMuscle}>Get Workout Muscle</button>
        </div>


        <div>        <button className="btn btn-primary" onClick={this.getExerciseImage}>Get Workout Images</button>
        </div>

        <div className="row justify-content-center">
          {this.state.workouts.length && this.state.activeTab === "workouts" ? (this.state.workouts.map(workout => (
            <div className="col-12 col-md-3" key={workout.id}>
              <Card style={{ width: '18rem' }}>
                {workout.image ? (<Card.Img variant="top" src={workout.image} />) : ""}
                <Card.Body>
                  <Card.Title>{workout.id} {workout.name}</Card.Title>
                  <Card.Text>
                    {workout.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))) : ""}

          {this.state.equipment.length && this.state.activeTab === "equipment" ? (this.state.equipment.map(equipment => (
            <div className="col-12 col-md-3" key={equipment.id}>
              <Card style={{ width: '18rem' }}>
                {equipment.image ? (<Card.Img variant="top" src={equipment.image} />) : ""}
                <Card.Body>
                  <Card.Title>{equipment.id}</Card.Title>
                  <Card.Text>
                    {equipment.name}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))) : ""}

          {this.state.muscles.length && this.state.activeTab === "muscles" ? (this.state.muscles.map(muscles => (
            <div className="col-12 col-md-3" key={muscles.id}>
              <Card style={{ width: '18rem' }}>
                {muscles.image ? (<Card.Img variant="top" src={muscles.image} />) : ""}
                <Card.Body>
                  <Card.Title>{muscles.id}</Card.Title>
                  <Card.Text>
                    {muscles.name}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          )
          )) : ""}

          {this.state.image.length && this.state.activeTab === "images" ? (this.state.image.map(image => (
            <div className="col-12 col-md-3" key={image.id}>
              <Card style={{ width: '18rem' }}>
                {image.image ? (<Card.Img variant="top" src={image.image} />) : ""}
                <Card.Body>
                  <Card.Title>{image.id}</Card.Title>
                  <Card.Text>
                    {image.name}
                  </Card.Text>
                  <Button variant="primary">See Workout</Button>
                </Card.Body>
              </Card>
            </div>
          )

          )) : ""}
        </div>

      </div>
    )
  }
};


export default Home