import React, { useState } from "react";
import { NativeBaseProvider, View } from 'native-base';
import AdicionarTarefa from './src/componentes/AdicionarTarefa';
import ListaTarefas from './src/componentes/ListarTarefas'

export default function App() {
  const [tarefas, setTarefas] = useState<string[]>([]);

  const adicionarTarefa = (novaTarefa: string) => {
    setTarefas([...tarefas, novaTarefa]);
  };

  return (
    <NativeBaseProvider>
      <View style={{ flex: 1 }}>
        <AdicionarTarefa onAdicionarTarefa={adicionarTarefa} />
        <ListaTarefas tarefas={tarefas} />
      </View>
    </NativeBaseProvider>
  );
}