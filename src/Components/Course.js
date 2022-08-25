import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/Course.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
    return (
        <Card>
            <Card.Img id="card-image" src={course.image} />
            <Card.Body>
                <Card.Title className="fs-6 fw-bold">

                    <Link className="course-link" to={course.slug}>
                        {" "}
                        {course.title.length > 54
                            ? course.title.substring(0, 54) + "..."
                            : course.title}
                    </Link>

                </Card.Title>
                <Card.Text id="instructor" className="text-muted">
                    {course.instructor}
                </Card.Text>
                <div className="d-flex">
                    <span className="course-rating">{course.rating}</span>
                    <ReactStars edit={false} value={course.rating} />
                </div>
                <Card.Text className="fs-6 fw-bold">₺{course.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Course;
