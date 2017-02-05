import React from 'react'

class List extends React.Component {
	state = {
		list: this.props.list,
		filters: this.props.filters
	}
	
	getFiltered = (list = [],filters = []) => {
		if(!filters.length){
			return list
		}
		return this.getFiltered(list.filter(filters.shift()), filters)
	}
	
	getChildren = children => {
		if(typeof children !== 'function'){
			throw new TypeError('List.children must be a function')
		}
		return children
	}
	
	render(){
		const lists = this.getFiltered(this.state.list,this.state.filters) || []
		const {children} = this.props
		return (
			<div className="list">
				{lists.map(children)}
			</div>
		)
	}
	
}

export default List