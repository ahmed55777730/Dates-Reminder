import React from 'react'
import { Col, Row } from 'react-bootstrap'

function DatesAction({deleteData,viewData}) {
  return (
        <Row className="justify-content-center ">
          <Col sm="8" className="d-flex justify-content-between">
            <button onClick={deleteData} className="btn-style p-2">مسح الكل</button>
            <button onClick={viewData} className="btn-style p-2">عرض البيانات</button>
          </Col>
        </Row>
  )
}

export default DatesAction