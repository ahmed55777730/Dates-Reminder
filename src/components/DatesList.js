import React from 'react'
import { Col, Row } from 'react-bootstrap';

function DatesList({person}) {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="">
        <div className="rectangle p-2">
          {person.length ? (
            person.map((e) => (
              <div className="d-flex border-bottom" key={e.id}>
                <img alt="صورة" src={e.img} className="img-avatar" />
                <div className="px-3 ">
                  <p className="d-inline fs-5">{e.name}</p>
                  <p className=" fs-6">{e.date}</p>
                </div>
              </div>
            ))
          ) : (
            <h2 className='text-center'>لا يوجد مواعيد اليوم</h2>
          )}
        </div>
      </Col>
    </Row>
  );
}

export default DatesList