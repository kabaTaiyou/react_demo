import React,{Component} from 'react'
import ComponentItems from '../component-items'
export default function ComponentList (props){

    const {delCallBack} = props
    //此时需要接收 到数据，并且传到items 组件上
    const { data } = props
    return<div className="col-md-8">
      <h3 className="reply">评论回复：</h3>
      <h2 style={{display: props.length?'none':'block'}}>暂无评论，点击左侧添加评论！！！</h2>
      <ul className="list-group">
        {/*{ 另一方面， 需要利用从App传来的data 进行遍历Component组件 }*/}
        {
          data.map((items,index)=>{
            const {length} = props.length
            return <ComponentItems data={items} key={items.id} delCallBack={delCallBack} length={length}/>
          })
        }


      </ul>
    </div>

}