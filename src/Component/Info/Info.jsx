const Info = (props) => {
  const Infomation = props.Infomation;
  const { capital, area, coatOfArms, population, timezones } = Infomation;

  return (
    <div>
      <div className="boxStyle" style={{textAlign:'center'}}>
        <img style={{ width: "120px" }} src={coatOfArms.png} alt="" />
        <p>
          Capital: <b>{capital}</b>
        </p>
        <p>
          Area: <b>{area}</b>
        </p>
        <p>
          Population: <b>{population}</b>
        </p>
        <p>
          TimeZone: <b>{timezones}</b>
        </p>
      </div>
    </div>
  );
};

export default Info;
