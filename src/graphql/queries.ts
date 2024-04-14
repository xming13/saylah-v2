/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCard = /* GraphQL */ `query GetCard($id: ID!) {
  getCard(id: $id) {
    id
    name
    code
    type
    image
    sound
    cards {
      nextToken
      __typename
    }
    card {
      id
      name
      code
      type
      image
      sound
      createdAt
      updatedAt
      cardCardsId
      __typename
    }
    createdAt
    updatedAt
    cardCardsId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCardQueryVariables, APITypes.GetCardQuery>;
export const listCards = /* GraphQL */ `query ListCards(
  $filter: ModelCardFilterInput
  $limit: Int
  $nextToken: String
) {
  listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      code
      type
      image
      sound
      createdAt
      updatedAt
      cardCardsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCardsQueryVariables, APITypes.ListCardsQuery>;
