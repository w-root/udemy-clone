import React from "react";
import Card from "react-bootstrap/Card";
import "../css/Course.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
    return (
        <Card>
            <Card.Img width={240} height={135} id="card-image" src={course.image} />
            <Card.Body>
                <Card.Title className="fs-6 fw-bold">
                    <Link className="course-link" to={course.slug}>
                        {course.title.length > 54
                            ? course.title.substring(0, 54) + "..."
                            : course.title}
                    </Link>
                </Card.Title>
                <Card.Text id="instructor" className="text-muted mb-0">
                    {course.instructor}
                </Card.Text>
                <div className="d-flex">
                    <span className="course-rating">{course.rating}</span>
                    <ReactStars edit={false} value={course.rating} />
                    <span className="text-muted ms-2">({course.students.length})</span>
                </div>
                <Card.Text className="fs-6 fw-bold">₺{course.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Course;
