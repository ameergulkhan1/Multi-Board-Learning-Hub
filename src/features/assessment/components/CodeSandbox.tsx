import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const Container = styled.div`
  padding: ${theme.spacing.lg};
  background: white;
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.md};
`;

const Title = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
`;

const SandboxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const EditorHeader = styled.div`
  background-color: #252526;
  padding: ${theme.spacing.md};
  margin: -${theme.spacing.lg} -${theme.spacing.lg} ${theme.spacing.md} -${theme.spacing.lg};
  border-bottom: 1px solid #3e3e42;
  color: #cccccc;
  font-weight: bold;
  font-size: ${theme.typography.fontSize.sm};
`;

const CodeEditor = styled.textarea`
  width: 100%;
  height: 300px;
  background-color: #1e1e1e;
  color: #d4d4d4;
  border: none;
  padding: ${theme.spacing.md};
  font-family: 'Courier New', monospace;
  font-size: ${theme.typography.fontSize.sm};
  resize: none;
  
  &:focus {
    outline: 1px solid ${theme.colors.primary.main};
  }
`;

const OutputPanel = styled.div`
  background-color: #f5f5f5;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.border.light};
  min-height: 300px;
`;

const OutputHeader = styled.div`
  font-weight: bold;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
  padding-bottom: ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.border.light};
`;

const Output = styled.div`
  font-family: 'Courier New', monospace;
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.primary};
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
`;

const Button = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background-color: ${theme.colors.primary.main};
  color: ${theme.colors.primary.contrast};
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  
  &:hover {
    background-color: ${theme.colors.primary.dark};
  }
`;

const CodeSandbox: React.FC = () => {
  const [code, setCode] = useState(`// Write your Python code here
def greet(name):
    return f"Hello, {name}!"

result = greet("World")
print(result)`);

  const [output, setOutput] = useState('Click "Run Code" to see output');

  const handleRunCode = () => {
    try {
      // Simple eval for demonstration (not secure for production)
      const result = eval(code);
      setOutput(`Output: ${result}\n\n✓ Code executed successfully!`);
    } catch (error: any) {
      setOutput(`✗ Error: ${error.message}`);
    }
  };

  const handleClear = () => {
    setCode('');
    setOutput('Click "Run Code" to see output');
  };

  return (
    <Container>
      <Title>💻 Code-Sandbox Interface</Title>
      <SandboxWrapper>
        <div>
          <EditorHeader>script.py</EditorHeader>
          <CodeEditor
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your code here..."
          />
        </div>
        <div>
          <OutputPanel>
            <OutputHeader>Output</OutputHeader>
            <Output>{output}</Output>
          </OutputPanel>
        </div>
      </SandboxWrapper>
      <ButtonGroup>
        <Button onClick={handleRunCode}>▶ Run Code</Button>
        <Button onClick={handleClear} style={{ backgroundColor: theme.colors.danger.main }}>
          🗑️ Clear
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default CodeSandbox;
