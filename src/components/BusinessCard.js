import React from "react";
import { StyleSheet, css } from "aphrodite";

const BusinessCard = props => {
  return (
    <React.Fragment>
      <div className="card mb-4">
        <div className="card-body d-flex flex-row">
          <div
            className={["card-header", css(styles.cardHeaderResponsive)].join(
              " "
            )}
          >
            <img
              className={css(styles.businessImg)}
              src={props.imageUrl}
              alt="business logo"
            />
          </div>
          <div>
            <h5 className="card-title">{props.businessName}</h5>
            <p>
              {props.businessCity}, {props.businessCountry}
            </p>
            <p className="card-text">{props.businessDescription}</p>
            {!!props.businessRating && <p>Rating: {props.businessRating}</p>}
            {!!props.businessCategory && (
              <p>Category: {props.businessCategory}</p>
            )}
          </div>
        </div>
        {props.children}
      </div>
      <span className={css(styles.cardsSeparatorResponsive)} />
    </React.Fragment>
  );
};

export default BusinessCard;

const styles = StyleSheet.create({
  /*responsively enforce wrapping of cards*/
  cardsSeparatorResponsive: {
    "@media(max-width: 995px)": {
      display: "block",
      width: "100%"
    },

    "@media(min-width: 996px)": {
      display: "none",
      ":nth-of-type(2n)": {
        display: "block",
        width: "100%"
      },
      ":last-of-type": {
        display: "block",
        width: "50%"
      }
    }
  },

  cardHeaderResponsive: {
    paddingTop: 0,
    backgroundColor: "white",
    borderBottom: "none",

    "@media(max-width: 550px)": {
      display: "none"
    }
  },

  businessImg: {
    "@media(min-width: 550px)": {
      width: "100px",
      height: "auto"
    },
    "@media(min-width: 768px)": {
      width: "150px",
      height: "auto"
    }
  }
});
