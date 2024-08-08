import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const PostThumbnail = (props) => {
  const { t } = useTranslation();

  return (
    <Link
      to={"/post/" + props.post.id}
      as={NavLink}
      className="thumbnail text-decoration-none text-black"
    >
      <Card className="h-100 boxShadow">
        <Card.Header className="fst-italic" style={{backgroundColor:'black' ,color:'white',fontSize:'20px'}}>{props.post.blogUser}</Card.Header>
        <Card.Body>
          <Card.Title className="fst-italic" style={{color:'darkgreen',fontSize:'18px'}}>{props.post.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" ,fontSize:'15px'}}>
            {props.post.content.slice(0, 200) + " . . ."}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex text-muted">
          <div className="me-auto"  style={{fontWeight:'bold',color:'red',fontSize:'10px',fontStyle:'italic'}}>{`${t("posted")}: ${
            props.post.createdOn
          }`}</div>
          <div style={{fontWeight:'bold',fontSize:'10px',fontStyle:'italic'}}>{`${t("edited")}: ${props.post.updatedOn}`}</div>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default PostThumbnail;
