import React, {Component} from 'react';
import './data.scss';
import { Button } from '@progress/kendo-react-buttons'
import { Breadcrumb } from "@progress/kendo-react-layout";
import Frame from '../frame'

const items = [
  {
    id: "category",
    text: "Category",
    iconClass: "k-i-file-txt",
  },
  {
    id: "search",
    text: "Search",
  },
  {
    id: "results",
    text: "Results",
  }
];

export default class DataBank extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: items,
      category: null,
      error: null,
      isLoaded: false,
      result: []
    };
  }

  componentDidMount() {
    console.log(this.items)

    fetch("http://stapi.co/api/v1/rest/animal/search")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            result: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

render () {
  const handleItemSelect = (event) => {
      let data = this.state.data
      const itemIndex = data.findIndex((curValue) => curValue.id === event.id);
      const newData = data.slice(0, itemIndex + 1);
      this.setState({ data: newData })
    };

    const handleButtonClick = (event) => {
      if (event) {
        this.setState({ data: items })
      }
    };

    const handleKeyDown = (event) => {
      let data = this.state.data;
      if (event.nativeEvent.keyCode === 13) {
        const itemIndex = data.findIndex((curValue) => curValue.id === event.id);
        const newData = data.slice(0, itemIndex + 1);
        this.setState({ data: newData })
      }
    };

    function updateCategory(category) {
      console.log(this)
    }

  return (
    <Frame>
      <h1>Data Bank</h1>
      <Breadcrumb
        data={this.state.data}
        onItemSelect={handleItemSelect}
        onKeyDown={handleKeyDown}
      />
      <h2>Select a research category:</h2>
      <Button onClick={updateCategory('species')}>Alien Species</Button>
      <Button onClick={updateCategory('character')}>Notable Individuals</Button>
      <Button onClick={updateCategory('spacecraft')}>Spacecrafts</Button>
    </Frame>


  )
  {/* const { error, isLoaded, items } = this.state;
    if (error) {
      return (<Frame><h2>Error</h2></Frame>);
    } else if (!isLoaded) {
      return (<Frame><div>Loading...</div></Frame>);
    } else {
      return (
        <Frame>
           <div class="data-wrapper">
             <h1>Starfleet Data Bank</h1>
             {console.log(this.state)}
           </div>
        </Frame>
      );
    }
  } */}
}
}
