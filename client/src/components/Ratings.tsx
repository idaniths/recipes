  
import ReactStars from 'react-stars'
import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { postRating } from '../api/fetches';

interface RatingProps {
    edit : boolean
    recipeRatings : Array<number>
    recipeId : string
    }

const calculateAverage = (rating : any) => {
        if(rating.length > 0){
            //reduce is a method that takes an array and reduces it to a single value
            const sum = rating.reduce((a:number, b:number) => a + b);
            return sum / rating.length;
        }
        else{
            return
        }
    };
    const StyledStars = styled(ReactStars)`
    display: flex;
    justify-content: center;
`
const starColor = '#ffc107';
const emptyStarColor = '#6f6f6f'

const Ratings = ({recipeRatings, recipeId, edit}: RatingProps) => {
    const ratingChanged = async (newRating: any) => {
        const response = await postRating(recipeId, newRating);

        if(response.status === 200){
            console.log('Rating updated')
        }
        else{
            console.log('Rating update failed')
        }
       
    }
    return (
        <StyledStars
        count={5}
        value={calculateAverage(recipeRatings)}
        onChange={ratingChanged}
        size={20}
        edit={edit}
        color1={emptyStarColor}
        color2={starColor}
        half={false}
        />
        
        )
}
  
export default Ratings

    