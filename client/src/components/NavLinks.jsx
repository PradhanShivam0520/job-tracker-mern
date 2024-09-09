import { useDashboardContext } from '../pages/DashboardLayout';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();

  return (
    <div className="nav-links">
    {links.map((link) => {
      const { text, path, icon } = link;
      const { role } = user;

      // Skip rendering the 'admin' link if the user's role isn't 'admin'
      if (path === 'admin' && role !== 'admin') return null;

      return (
        <StyledNavLink
          to={path}
          key={text}
          className={({ isActive }) =>
            `flex items-center py-4 pl-10 capitalize transition-all duration-300 ${
              isActive ? 'text-primary-500' : 'text-grey-500'
            } hover:pl-12 hover:text-primary-500`
          }
          onClick={isBigSidebar ? null : toggleSidebar}
          end
        >
          <span className="icon">{icon}</span>
          {text}
        </StyledNavLink>
      );
    })}
  </div>

  );
};

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: var(--text-secondary-color);
  padding: 1rem 0;
  padding-left: 2.5rem;
  text-transform: capitalize;
  transition: padding-left 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    padding-left: 3rem;
    // color: var(--primary-500);
    color: var(--primary-500);
  }

  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }

  &.active {
    color: var(--primary-500);
  }
`;

export default NavLinks;
