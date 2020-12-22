import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios'; 
import Loading from '../component/Loading/Loading';
import Card from '../component/Card/Card';
import './Popular.css'

// 分类菜单
class Menu extends React.Component{
    
    render() {
        const {onClick,current}=this.props;
        const links = [
            {
                title: 'All',
                query: 'stars:>1'
            },
            {
                title: 'JavaScript',
                query: 'stars:>1+language:javascript'
            },
            {
                title: 'Ruby',
                query: 'stars:>1+language:ruby'
            },
            {
                title: 'Java',
                query: 'stars:>1+language:java'
            },
            {
                title: 'CSS',
                query: 'stars:>1+language:css'
            }
        ];
        const link = links.map((item,key) => (
          <li className='li' key={key}>   
            <button onClick={() => onClick(item.query)} className={current === item.query ? 'btnActive' : 'btnDefault'}>
              {item.title}
            </button>
          </li>
));
        return (
          <ul className='uls'>
            {link}
          </ul>
        );
    }
}

// 内容列表无限加载
class ContentListInfinite extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           
            hasMore:true,
            // 当前加载页数
            pageNum:1,
            // 最多加载页数
            pageEnd:3,
            // 存放请求到的数据
            items: []
        };
    }

    componentDidMount() {
        
    }

    // 组件props和state更新时调用
    componentDidUpdate (prevProps) {
        // 判断当前要查询的类别是否有改变
        if (this.props.query !== prevProps.query) {
            // 有改变，即切换了分类
            this.setState({
                // 把之前分类加载的内容清空，当前页重置为第一页，设置继续加载为true
                items: [],
                pageNum: 1,
                hasMore: true  
            });
        }
    }

    // 请求函数
    search = async () => {
        const {query} = this.props;
        const {pageNum,pageEnd,items}=this.state;
        // 如果当前页已经是最后一页或超出，设置加载更多为false，不再继续加载
        if(pageNum>pageEnd){
            this.setState({
                hasMore:false
            });
            return;
        }
        // 不是最后一页就继续请求数据加载   
        const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories&page=${pageNum}`;
        try {
            const res = await axios.get(url);
            // concat是数组拼接函数，把这次请求到的数据加到之前加载的数据数组里
            this.setState({
                items: items.concat(res.data.items) 
            })
            
        } catch (e) {
            
        }
        // 当前页+1
        this.setState({
            pageNum:pageNum+1,
        })
    }

    render() {
        const {hasMore,items} = this.state;
        
        const cards = items.map((item, key) =>
          <Card key={key} source={item} index={key + 1} />
        );
        return (
          <InfiniteScroll
            pageStart={0}
            loadMore={()=>this.search()}
            hasMore={hasMore}
            loader={<div className="loader" key={0}><Loading /></div>}
          >
            <ul className='grid'>
              {cards}
            </ul>
          </InfiniteScroll>
        );
    }
}
// 内容部分
class Popular extends React.Component{
    constructor(props) {
        super(props)
        this.state = { query: 'stars:>1' };
    }

    onClick=(query)=>{
        this.setState({
            query
        })
    }

    render(){
        const {query}=this.state;
        return(
          <div>
            <Menu onClick={this.onClick} current={query} />
            <ContentListInfinite query={query} />
          </div>
        )
    }
}

export default Popular;