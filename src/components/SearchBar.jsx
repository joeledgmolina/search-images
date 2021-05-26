import React,{useState} from 'react';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const {onSearchBarSubmit} = props;

	const onSearchBarChange = (event) =>{
		setTerm(event.target.value);
	}

	const onFormSubmit = (event) =>{
    event.preventDefault();
    onSearchBarSubmit(term);
  }
  
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit} >
        <div className="field">
          <label>Image Search</label>
          <input type="text" value={term} onChange={onSearchBarChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
