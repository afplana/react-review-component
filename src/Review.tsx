import React, { FunctionComponent, useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaRandom } from 'react-icons/fa';
import { Author, Displacement, ImageContainer, Info, Job, Next, PersonImage, Previous, Quotes, Random, Review as Article } from './styled'

interface Props {

}

export const Review: FunctionComponent<Props> = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const verify = (idx: number) => {
        if (idx > people.length - 1) {
            return 0;
        }
        if (idx < 0) {
            return people.length - 1;
        }
        return idx;
    };

    const prevPerson = () => {
        setIndex((index) => verify(index - 1));
    }

    const nextPerson = () => {
        setIndex((index) => verify(index + 1));
    }

    const randomPerson = () => {
        setIndex((index) => verify(Math.floor(Math.random() * people.length)));
    };

    return <Article>
        <ImageContainer>
            <PersonImage src={image} alt={name} />
            <Quotes><FaQuoteRight /></Quotes>
        </ImageContainer>

        <Author>{name}</Author>
        <Job>{job}</Job>
        <Info>{text}</Info>

        <Displacement>
            <Previous onClick={prevPerson}><FaChevronLeft /></Previous>
            <Next onClick={nextPerson}><FaChevronRight /></Next>
        </Displacement>
        <Random onClick={randomPerson}><FaRandom /></Random>
    </Article>;
};