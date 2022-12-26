import { ApolloQueryResult } from "@apollo/client/core/types"
import { ErrorResponse } from "@apollo/client/link/error"
import { MeQuery } from "src/generated/graphql"

export const responseHasError = (response: ErrorResponse) => {
    return response.graphQLErrors?.some((error) => error.message === 'Unauthorized')
}

export const queryHasError = (response: ApolloQueryResult<MeQuery>) => {
    return response.errors?.some((error) => error.message === 'Unauthorized')
}