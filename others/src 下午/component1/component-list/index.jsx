import React,{Component} from 'react'
import ComponentItems from '../component-items/index'
export default  class ComponentList extends  Component{

  render(){
    const { data,delData,length } = this.props

    return <div className="col-md-8">
      <h3 className="reply">评论回复：</h3>
      <h2 style={{display: length?'none':'block'}}>暂无评论，点击左侧添加评论！！！</h2>

      <ul className="list-group">
        {

          data.map((data)=>{
            console.log(data.id)
            return <ComponentItems data={data} key={data.id} delData={delData}/>

          })
        }
      </ul>
    </div>
  }

}