import React from 'react';
import "./Card.css"

// 展示卡片
class Card extends React.Component{
    render() {
        const {index,source}=this.props;
        if(!source){
            return <div>没有卡片</div>;
        }
        return (
          <div className='cradLight'>
            <h4 className='Ranking'>#{index}</h4>
            <img src={source.owner.avatar_url} alt={source.name} className='cardImg' />
            <h2 className='cardTitle'>
              <a href={source.html_url} className='cardLink cardA' target="_blank">
                {source.owner.login}
              </a>
            </h2>
            <ul className='cardList'>
              <li className='cardListLi'>
                <div>
                  <div className='cardMan'>
                    <i className="fa fa-user fa-fw icon" style={{color:'rgb(255, 191, 116)'}} />
                    <a href={source.owner.html_url} target="_blank" className='cardListA cardA'>
                      {source.owner.login}
                    </a>
                  </div>
                </div>
              </li>
              <li className='cardListLi'>
                <i className="fa fa-star fa-fw icon" style={{color:'rgb(255, 215, 0)'}} />
                {source.stargazers_count} stars
              </li>
              <li className='cardListLi'>
                <i className="fa fa-code-fork fa-fw icon" style={{color:'rgb(129, 195, 245)'}} />
                {source.forks} forks
              </li>
              <li className='cardListLi'>
                <i className="fa fa-warning fa-fw icon" style={{color:'rgb(241, 138, 147)'}} />
                {source.open_issues} Open issues
              </li>
            </ul>
          </div>
        );
    }
}
export default Card;