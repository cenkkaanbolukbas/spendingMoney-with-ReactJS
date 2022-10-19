function Header({ total, money }) {
  return (
    <>
      <div>
        {total > 0 && money - total !== 0 && (
          <div className="headerx">
            Harcayacak {money - total} $ paranız kaldı!
          </div>
        )}
        {total === 0 && (
          <div className="headerx">Harcamak için  $ {money} paranız var!</div>
        )}
        {money - total === 0 && <div className="headerx">Paranız bitti !</div>}
      </div>
      <style jsx>
        {`
          .headerx {
            position: sticky;
            top:0;
            background: linear-gradient(to bottom, green, greenyellow);
            height: 60px;
            display: flex;
            align-items: center;
            justify-content:center;
            color: #fff;
            font-size:24px;
            letter-spacing: 2px;

          }
        `}
      </style>
    </>
  );
}
export default Header;
