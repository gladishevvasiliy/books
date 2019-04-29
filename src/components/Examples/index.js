import React from 'react'
import { Image, Carousel } from 'react-bootstrap'

const Examples = ({ examples }) => (
  <React.Fragment>
    {examples.length === 1 ? (
      <Image
        className="d-block w-100"
        // variant="top"
        src={`https:${examples[0].fields.file.url}`}
        // fluid
      />
    ) : (
      <Carousel>
        {examples.map(example => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https:${example.fields.file.url}`}
              alt="Пример"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    )}
  </React.Fragment>
)
export default Examples
