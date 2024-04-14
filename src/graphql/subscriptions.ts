/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCard = /* GraphQL */ `subscription OnCreateCard($filter: ModelSubscriptionCardFilterInput) {
  onCreateCard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCardSubscriptionVariables,
  APITypes.OnCreateCardSubscription
>;
export const onUpdateCard = /* GraphQL */ `subscription OnUpdateCard($filter: ModelSubscriptionCardFilterInput) {
  onUpdateCard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCardSubscriptionVariables,
  APITypes.OnUpdateCardSubscription
>;
export const onDeleteCard = /* GraphQL */ `subscription OnDeleteCard($filter: ModelSubscriptionCardFilterInput) {
  onDeleteCard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCardSubscriptionVariables,
  APITypes.OnDeleteCardSubscription
>;
