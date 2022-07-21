import {
  ApolloLink,
  FetchResult,
  NextLink,
  Observable,
  Operation,
} from "@apollo/client";

interface Options {
  label: string;
}

class ReplayLink extends ApolloLink {
  label: string;
  constructor({ label }: Options) {
    super();
    this.label = label;
  }

  request(
    operation: Operation,
    forward?: NextLink
  ): Observable<
    FetchResult<Record<string, any>, Record<string, any>, Record<string, any>>
  > {
    const operationContext = operation.getContext();
    const observable = forward(operation);
    if (operationContext.sendReplay) {
      // Send replay to analytics here
    }
    return observable;
  }
}

export default ReplayLink;
