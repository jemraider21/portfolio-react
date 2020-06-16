import React from "react";
import {Card, Image} from "semantic-ui-react";

const PreviewCard = ({fullName, changeView}) => {
    const image = `https://github.com/${fullName}/blob/master/preview.png?raw=true`
    return(
        <Card onClick={changeView}>
            <Image src={image} />
        </Card>
    )
}

export default PreviewCard;