# Recruitment-frontend

## Tasks
1. Clone repository
1. Install dependencies, run dev server
1. Fix potential errors during start
1. Implement login method to `/users/login`
    - request body should have form:
    ```
    {
      "username": "username",
      "password": "password"
    }
    ```

1. Get data from `/areas/data` using token uthorization and render on map in `Data` component using scatterplot method  
    - `/login` endpoint should return token, which should be next passed in header in form:  
    ```
    Authorization: Token token_string
    ```

    - similiar effect should be achieved:

![scatterplot](/src/assets/scatterplot.PNG)

6. Get data from `/areas/secondary` using token authorization and render on map as polygon in `Secondary` component 
    - similiar effect should be achieved:

![polygon](/src/assets/boundary.PNG)

7. Use loading spinner after login, there can be some demo delay used.

![loading](/src/assets/loading.gif)

8. Implement styles to list in `Home` component according to visualization below:
    - view should be responsive and UX-reactive (hover, click effects, transitions etc.)
    - avatars can be any sample images from web

![home_preview](/src/assets/datasets_list.PNG)

9. Add navigation button over the map in lower left corner to go back to the home list:

![back_button](/src/assets/back_button.PNG)

10. Use Redux-toolkit to handle global application state

1. Use Redux-Saga to handle fetching data from API

1. Create test suite (units/integrations) for `Login` view

## Additional remarks
- commits should be done after every particular change, names should be self-explanatory
- it's possible to use additional libraries in order to complete tasks