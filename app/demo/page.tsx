'use client';

import styles from '@/app/demo/demo.module.css';
import { Button } from '@mui/material';

import styled from 'styled-components';

const Content = styled.div`
  background-color: lightsalmon;
`;

export default function DemoPage() {
  return (
    <>
      <h1 className={styles.headline}>Hallo Welt</h1>
      <Content>Hallo Welt</Content>
      <Button>Huhu</Button>
    </>
  );
}
