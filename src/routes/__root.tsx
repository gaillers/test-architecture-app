import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="w-full flex justify-center gap-[40px] h-[70px] items-center bg-cornflowerBlue">
        <Link to="/" className="[&.active]:font-bold">Home</Link>
        <Link to="/auth" className="[&.active]:font-bold">Auth</Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
