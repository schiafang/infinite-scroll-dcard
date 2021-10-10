import './ArticleCard.css'
import { forwardRef } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-tw'
import relativeTime from 'dayjs/plugin/relativeTime'
import heartIcon from '../assets/heart.png'
import laughIcon from '../assets/laugh.png'
import icons from '../utilities/svgFiles'

dayjs.extend(relativeTime)

const ArticleCard = forwardRef(({ data }, ref) => {
  const {
    forumName,
    excerpt,
    media,
    mediaMeta,
    commentCount,
    likeCount,
    createdAt,
  } = data

  return (
    <div className='card-wrapper' ref={ref}>
      <article>
        <div className='header'>
          <div>
            {forumName}
            <span className='seperate-dot'></span>
            <span>{dayjs(createdAt).locale('zh-tw').fromNow()}</span>
          </div>
          <span>{icons.tool}</span>
        </div>

        <h2 className='title'>{data.title}</h2>

        <div className='excerpt'>
          {excerpt.length > 0 ? (
            <div>{excerpt}</div>
          ) : (
            <img src={mediaMeta[0].url} alt='excerpt-img' />
          )}
        </div>

        <div className='thumbnail'>
          {media.length > 0 && <img src={media[0].url} alt='thumbnail-img' />}
        </div>

        <div className='footer'>
          <div>
            <img src={heartIcon} alt='heart-icon' />
            <img src={laughIcon} alt='laugh-icon' />
            <span>{likeCount}</span>
          </div>

          <div className='collect'>
            {icons.comment}
            <span>{commentCount}</span>
          </div>

          <div className='collect'>
            {icons.collect}
            <span>收藏</span>
          </div>
        </div>
      </article>
    </div>
  )
})

export default ArticleCard
