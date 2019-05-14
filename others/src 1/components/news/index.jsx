import React,{Component} from 'react'
export default class News extends Component {
  render(){
   return  <div>
      <div>
        <ul>
          <li>
            <a href="/home/message/1">message001</a> &nbsp;&nbsp;
            <button>push</button> &nbsp;
            <button>replace</button>
          </li>
          <li><a href="/home/message/2">message002</a> &nbsp;&nbsp;<button>push</button> &nbsp;<button>
            replace
          </button>
          </li>
          <li><a href="/home/message/4">message004</a> &nbsp;&nbsp;<button>push</button> &nbsp;<button>
            replace
          </button>
          </li>
        </ul>
        <button>前进</button>
        <button>后退</button>
      </div>
    </div>
  }
}








