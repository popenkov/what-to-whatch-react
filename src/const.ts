export enum AppRoute {
  Root = '/',
  AddReview = '/films/:id/review',
  NotFound = '/*',
  SignIn = '/login',
  MyList = '/my-list',
  Film = '/films/:id',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
