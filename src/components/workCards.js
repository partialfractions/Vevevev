import React from "react";
import {Card, Image, Label} from 'semantic-ui-react'
import Break from '../images/work/break.jpg';
import Flipp from '../images/work/flipp.jpg';
import Prettifier from '../images/work/item.jpg';
import MathOrientation from '../images/work/mo.jpg';
import Rise from '../images/work/rise.jpg';
import VM from '../images/work/vm.jpg';
import 'semantic-ui-css/semantic.min.css'

const WorkCards = () => (
  <Card.Group style={{height: '100%', position: 'relative', marginLeft:'10%', marginRight: '10%', marginBottom: '10%'}}>
    <Card>
      <Image src={Flipp} />
      <Card.Content>
        <Card.Header>Flipp</Card.Header>
        <Card.Meta>Software Engineer</Card.Meta>
        <Card.Description>
          <Label.Group color='black' size='small'>
            <Label>Ruby on Rails</Label>
            <Label>Circle CI</Label>
            <Label>AWS</Label>
            <Label>Kafka</Label>
          </Label.Group>
        </Card.Description>
      </Card.Content>
      {/*<Card.Content extra><Icon name='user' />22 Friends</Card.Content>*/}
    </Card>
    <Card>
      <Image src={MathOrientation} />
      <Card.Content>
        <Card.Header>Math Orientation</Card.Header>
        <Card.Meta>Web Developer & Graphic Designer</Card.Meta>
        <Card.Description>
          <Label.Group color='black' size='small'>
            <Label>HTML</Label>
            <Label>CSS</Label>
            <Label>Javascript</Label>
            <Label>Photoshop</Label>
          </Label.Group>
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Image src={Prettifier} />
      <Card.Content>
        <Card.Header>Fun Little Item Prettifying Parser</Card.Header>
        <Card.Meta>Project: Data Visualization</Card.Meta>
        <Card.Description>
          <Label.Group color='black' size='small'>
            <Label>HTML</Label>
            <Label>CSS</Label>
            <Label>Javascript</Label>
          </Label.Group>
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Image src={VM} />
      <Card.Content>
        <Card.Header>VM</Card.Header>
        <Card.Meta>Project: Terminal Text Editor</Card.Meta>
        <Card.Description>
          <Label.Group color='black' size='small'>
            <Label>C++</Label>
          </Label.Group>
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Image src={Break} />
      <Card.Content>
        <Card.Header>Break</Card.Header>
        <Card.Meta>Project: Chrome Extension</Card.Meta>
        <Card.Description>
          <Label.Group color='black' size='small'>
            <Label>HTML</Label>
            <Label>CSS</Label>
            <Label>Javascript</Label>
          </Label.Group>
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Image src={Rise} />
      <Card.Content>
        <Card.Header>Rise</Card.Header>
        <Card.Meta>Project: React Native App</Card.Meta>
        <Card.Description>
          <Label.Group color='black' size='small'>
            <Label>React Native</Label>
            <Label>Javascript</Label>
          </Label.Group>
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default WorkCards
