import { DifficultiesMenu } from "@/app/components/difficulties-menu";
import { GameBoard } from "@/app/components/game-board";
import { GameStage } from "@/app/components/game-stage";

const App = () => (
    <main className="flex h-screen w-full items-center justify-center p-4">
        <GameStage menu={<DifficultiesMenu />} playing={<GameBoard />} />
    </main>
);

export default App;
