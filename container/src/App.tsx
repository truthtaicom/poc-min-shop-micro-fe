import React from 'react';
//@ts-ignore
import Header from 'appHeader/Header';
//@ts-ignore
import ProductList from 'appProductList/ProductList';
//@ts-ignore
import ProductSearch from 'appProductSearch/ProductSearch';

 const App = () => (
  <div style={{ margin: '20px' }}>
    <React.Suspense fallback="Loading header...">
      <div
        style={{
          border: '1px dashed black',
          height: '50vh',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1>CONTAINER</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <div
            style={{
              marginRight: '2rem',
              padding: '2rem',
              border: '1px dashed black',
            }}
          >
            <h2>Header</h2>
            <Header />
          </div>
          <div style={{ border: '1px dashed black', padding: '2rem' }}>
            <h2>ProductList</h2>
            <ProductList />
          </div>

          <div style={{ border: '1px dashed black', padding: '2rem' }}>
            <h2>ProductSearch</h2>
            <ProductSearch />
          </div>
        </div>
      </div>
    </React.Suspense>
  </div>
);

export default App