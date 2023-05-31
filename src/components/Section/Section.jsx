import PropTypes from 'prop-types';

export const Section = ({ children, title }) => (
  <>
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  </>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
