import QuillEditor from '@components/common/QuillEditor'
import { FC } from 'react'
import ReviewRenderer from './reviewsRender'

export const MainRenderer:FC<{
    description: string
    mainArticle: string
    reviews?: any[]
    setReviews?: any
}> = ({description, mainArticle, reviews, setReviews}) => {
    return (
        <div>
            <QuillEditor
                value={description}
                readOnly={true}
            />

            <QuillEditor
                value={mainArticle}
                readOnly={true}
            />

            <br />
            <h1><u>Reviews</u></h1>
            <ReviewRenderer
                rawData={reviews}
                editable={false}
                setReviews={setReviews}
            />
        </div>
    )
}
