import QuillEditor from '@components/common/QuillEditor'
import { FC } from 'react'

export const MainRenderer:FC<{
    description: string
    mainArticle: string
    reviews?: Object
}> = ({description, mainArticle, reviews}) => {
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
            {reviews
            ? Object.keys(reviews).map((key, i) => {
                return ( 
                    <div key={i}>
                        <h5>Name: {reviews[key]['name']}</h5>
                        <h5>{reviews[key]['social']}</h5>
                        <h5>Year: {reviews[key]['year']}</h5>
                        <h5>{reviews[key]['review']}</h5>
                        <br />
                    </div>
                )
            })
            : null
            }
        </div>
    )
}
