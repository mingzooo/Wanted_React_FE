import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { chartOptions } from './ChartData';
import { chartData } from './ChartData';

function Salary() {
  const [salary, setSalary] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [jobCategory, setJobCategory] = useState('서버 개발자');

  const handleOnChange = e => {
    setJobCategory(e.target.value);
  };

  useLayoutEffect(() => {
    fetch(
      `http://54.180.99.36:8000/jobpostings/salary?jobGroup=개발&job=${jobCategory || `프론트엔드 개발자`
      }`
    )
      .then(res => res.json())
      .then(result => setSalary(result.result));
  }, [jobCategory]);

  useEffect(() => {
    fetch(`http://54.180.99.36:8000/jobpostings/jobs`)
      .then(res => res.json())
      .then(jobs => setJobs(jobs.result));
  }, []);

  const handleOnClick = e => {
    setJobCategory(e.target.value);
  };

  return (
    <>
      <Container>
        <Section>
          <div className="header"></div>
          <Bar
            data={chartData(salary.avgArray)}
            options={chartOptions}
            width={1100}
            height={392}
          />
        </Section>
        <AverageContainer>
          <div>
            <button>개발</button>
            <h4>{jobCategory}</h4>
            <h2>{String(salary.avgTotal).slice(0, 4)} 만원</h2>
          </div>
        </AverageContainer>
      </Container>
      <SelectContainer>
        <div>
          <select onChange={handleOnChange}>
            {jobs[0]?.jobs.map(job => (
              <option name={job.name} value={job.name} onClick={handleOnClick}>
                {job.name}
              </option>
            ))}
          </select>
        </div>
      </SelectContainer>
    </>
  );
}
export default Salary;

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(80, 190, 121);
`;

const Section = styled.section`
  width: 784px;
  height: 392px;
  padding-top: 80px;
`;

const AverageContainer = styled.section`
  margin-left: 40px;
  padding-top: 80px;

  button {
    margin: 0 10px 10px 0;
    padding: 8px 10px;
    color: #22bd79;
    background-color: #fff;
    border-radius: 3px;
    border: none;
    font-size: 16px;
  }

  h4 {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
    color: white;
  }

  h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.4;
    color: #fff;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  select {
    width: 500px;
    font-size: 30px;
  }
`;
