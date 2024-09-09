import { useState } from 'react';
import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.post('/jobs', data);
      queryClient.invalidateQueries(['jobs']);
      toast.success('Job added successfully ');
      return redirect('all-jobs');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const AddJob = () => {
  const { user } = useOutletContext();
  const [jobType, setJobType] = useState(JOB_TYPE.FULL_TIME);

  // Handle job type change
  const handleJobTypeChange = (event) => {
    setJobType(event.target.value);
  };

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>Add Job</h4>
        <div className='form-center'>
          <FormRow type='text' labelText='Job role' name='position' />
          <FormRow type='text' name='company' />
          <FormRow
            type='text'
            labelText='Job Location'
            name='jobLocation'
            defaultValue={user.location}
          />
          <FormRowSelect
            labelText='Job Status'
            name='jobStatus'
            defaultValue={JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            labelText='Job Type'
            name='jobType'
            defaultValue={JOB_TYPE.FULL_TIME}
            list={Object.values(JOB_TYPE)}
            onChange={handleJobTypeChange}
          />
          {jobType === (JOB_TYPE.FULL_TIME || JOB_TYPE.PART_TIME) && (
            <FormRow
              type='text'
              labelText='Salary (CTC)'
              name='salary'
            />
          )}
          {jobType === (JOB_TYPE.PART_TIME) && (
            <FormRow
              type='text'
              labelText='Salary (CTC)'
              name='salary'
            />
          )}
          {jobType === JOB_TYPE.INTERNSHIP && (
            <FormRow
              type='text'
              labelText='Stipend'
              name='salary'
            />
          )}
          {jobType === JOB_TYPE.PPO && (
            <FormRow
              type='text'
              labelText='Stipend, PPO'
              name='salary'
            />
          )}
          <FormRow
            type='date'
            labelText='Select Date'
            name='jobDate'
            defaultValue={Date.now}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddJob;
